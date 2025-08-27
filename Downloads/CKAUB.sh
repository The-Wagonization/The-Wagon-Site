#!/bin/bash

echo "=== ChromeOS Kernel Version Block (CKAUB) Script ==="
echo "Made by Lxrd and Codenerd, with credits to Con for finding a new way to powerwash with daub using lvm and fanq for helping with the script + emotional support"
echo "Credits to Kxtz for the original idea of KAUB. He had KAUB before but he never released it, we just managed to find it ourselves"
echo "Brought to you by crosbreaker team, crosbreaker.dev"
echo "WARNING: This will modify your Chromebook partitions."
echo "Ensure you have a recovery image ready!"
read -p "Do you want to continue? (y/N): " confirm
if [[ $confirm != "y" ]]; then
    echo "Aborted."
    exit 1
fi

get_largest_block_dev(){
    # return largest mmcblk device or first block device
    dev=$(lsblk -b -dn -o NAME,SIZE | awk '$1 ~ /^mmcblk/ {print $1" "$2}' | sort -k2 -nr | head -n1 | awk '{print "/dev/"$1}')
    if [ -z "$dev" ]; then
        first=$(lsblk -dn -o NAME | head -n1)
        dev="/dev/$first"
    fi
    echo "$dev"
}

# get main block device
BLOCK_DEV=$(get_largest_block_dev)
echo "using block device: $BLOCK_DEV"

echo "Cloning rootfs partition (p2 -> p12)..."
dd if=${BLOCK_DEV}p2 of=${BLOCK_DEV}p12 status=progress oflag=direct

echo "Updating GPT priority flags..."
cgpt add ${BLOCK_DEV} -P15 -T15 -S1 -R1 -i 2
cgpt add ${BLOCK_DEV} -P14 -T14 -S1 -R1 -i 4
cgpt add ${BLOCK_DEV} -P1  -T1  -S1 -R1 -i 12

echo "Launching fdisk to delete partitions 4 and 5..."
fdisk ${BLOCK_DEV} <<EOF
d
4
d
5
w
EOF

echo "Flashing recovery partitions from USB..."

attempts=0
max_attempts=3
while [ $attempts -lt $max_attempts ]; do
    echo "Please enter the dd command to flash partition ${BLOCK_DEV}p2 from your usb device:"
    read manual_input

    # validate dd input (accept any /dev/mmcblkNp2 target)
    if [[ $manual_input =~ ^dd\ if=/dev/sd[a-zA-Z0-9]+.*\ of=/dev/mmcblk[0-9]+p2 ]]; then
    # run dd
        eval $manual_input
        dd_status=$?

        if [ $dd_status -eq 0 ]; then
            echo "Recovery partition flashed successfully."
            break
        else
            echo "Error: dd command failed."
            let attempts++
            if [ $attempts -ge $max_attempts ]; then
                echo "Maximum attempts reached. Do you want to retry or abort? (retry/abort): "
                read action
                if [[ $action == "abort" ]]; then
                    echo "Aborted."
                    exit 1
                fi
            fi
        fi
    elif [[ $manual_input =~ ^lsblk ]]; then
        # allow diagnostic commands (not flash)
        echo "You can use lsblk to check the partition, but this will not be counted as a valid flash command."
        eval $manual_input  # Run lsblk (or any command for output display)
    else
        echo "Invalid command. Please enter the correct dd command to flash the partition."
    fi
done


attempts=0
while [ $attempts -lt $max_attempts ]; do
    echo "Please enter the dd command to flash partition ${BLOCK_DEV}p3 from your usb device:"
    read manual_input

    # validate dd input (accept any /dev/mmcblkNp3 target)
    if [[ $manual_input =~ ^dd\ if=/dev/sd[a-zA-Z0-9]+.*\ of=/dev/mmcblk[0-9]+p3 ]]; then
    # run dd
        eval $manual_input
        dd_status=$?

        if [ $dd_status -eq 0 ]; then
            echo "Recovery partition flashed successfully."
            break
        else
            echo "Error: dd command failed."
            let attempts++
            if [ $attempts -ge $max_attempts ]; then
                echo "Maximum attempts reached. Do you want to retry or abort? (retry/abort): "
                read action
                if [[ $action == "abort" ]]; then
                    echo "Aborted."
                    exit 1
                fi
            fi
        fi
    elif [[ $manual_input =~ ^lsblk ]]; then
        # allow diagnostic commands (not flash)
        echo "You can use lsblk to check the partition, but this will not be counted as a valid flash command."
        eval $manual_input
    else
        echo "Invalid command. Please enter the correct dd command to flash the partition."
    fi
done

echo "Formatting stateful partition..."
mkfs.ext4 /dev/mmcblk0p1

# disable dev mode req
crossystem disable_dev_request=1

# update gpt
echo "Updating GPT flags again..."
cgpt add ${BLOCK_DEV} -P15 -T15 -S1 -R1 -i 2
cgpt add ${BLOCK_DEV} -P1  -T1  -S1 -R1 -i 12

sync && sync

# kernel gpt entry
cgpt add ${BLOCK_DEV} -P14 -T14 -S1 -R1 -i 12 -t kernel

echo "===================================================="
echo "You are now CKAUBBED."
echo "Kernel version updates will be blocked on recovery or updates."
echo "Normal ChromeOS updates will NOT work."
echo ""
echo "To update in the future, boot into SH1MMER and run:"
echo "dd if=/dev/sdX4 of=${BLOCK_DEV}p2 bs=1M oflag=direct status=progress"
echo "dd if=/dev/sdX3 of=${BLOCK_DEV}p3 bs=1M oflag=direct status=progress"
echo ""
echo "⚠ DO NOT powerwash in normal ChromeOS UI!"
echo "To powerwash, boot into SH1MMER and run:"
echo "mkfs.ext4 ${BLOCK_DEV}p1"
echo "apparently this isn't the same as kxtz's version so we are naming is CKAUB"
echo "===================================================="
