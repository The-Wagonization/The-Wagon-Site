
# Scratch Cloud Manager

This Chrome extension allows users to send custom WebSocket packets to modify Scratch cloud variables.




## How to Install

1. Download the .zip file from the repository.
2. Open chrome://extensions/ in your browser.
3. Enable developer mode by toggling the switch in the top-right corner.<br/>
![Developer Mode Switch](https://github.com/user-attachments/assets/f2aac292-d858-4f0d-bddf-ee356ded84f1)<br/>
4. Drag the .zip file onto the page or click "Load unpacked" and select the .zip file.<br/>
![Load unpacked, Pack extension, Update](https://github.com/user-attachments/assets/7e0c88b3-45c9-465b-b0b9-488c8fa40cdf)<br/>



## How to Use

> [!WARNING]  
> Use this extension only on Scratch projects you own or have permission to modify. Unauthorized use can violate Scratch's terms of service and result in penalties. Learn more [here](https://scratch.mit.edu/terms_of_use).

**Step 1:** Sign Into Scratch<br/>
Ensure you are signed into a Scratch account with the Scratcher role to use cloud variables.<br/><br/>
**Step 2:** Preparing Your Project<br/>
Go to the project you want to use ([Example](https://scratch.mit.edu/projects/1067597166/)) and click the green flag to start it.<br/>
![Green flag, Red stop sign, Fullscreen](https://github.com/user-attachments/assets/8b0a94ee-9d9c-4954-aa33-cf17e682a0f8)<br/><br>
**Step 3:** The Handshake<br/>
1. Click the extension icon and open the "*Handshake*" tab.
2. Under "*Packet Name:*", enter "*handshake*".
3. Enter your account's username under "*Username:*" (it **must** match your actual account name).
4. Enter the project's ID under "*Project ID:*".
5. Click "*Submit*".<br/>

You'll see something like "*Sent Handshake: {"name":"handshake","user":"YourUsername","project_id":"1067597166"} under "Response Packets".*"<br/>
![Packet Type (handshake), Username, Project ID](https://github.com/user-attachments/assets/ffcd304b-3222-439e-8b77-72f2b6c39dcb)<br/><br/>
**Step 4:** Sending Set Requests<br/>
1. Go to the "*Send Action*" tab.
2. Enter "*set*" under "*Packet Method*".
3. Enter your username under "*Username:*" (it **must** match your actual account name).
4. Enter the project's ID under "*Project ID:*".
5. Type the variable name under "*Variable Name:*" (do **not** include the ☁ symbol, the code handles that).
6. Enter the value (**numbers only**) under "*Value:*".
7. Click "*Submit*".

You'll see something like "*Sent Cloud Update: {"method":"set","user":"YourUsername","project_id":"1067597166","name":"☁ Cloud","value":"123456789"}*" under "*Response Packets*".<br/>
![Packet Method (set), Username, Project ID, Variable Name, Value](https://github.com/user-attachments/assets/0e90ecca-82d7-4876-a028-a67a5e2d4b77)


## What's Planned

I'm planning on continuing to improve the Chrome extension. Here's what's coming in future updates:

- **Better UI**: A cleaner, more user-friendly design for easier navigation.
- **Username & Project ID Autofill**: Automatically fill in your account's username and the current project's ID to save time.
- **Easy Save-and-Load**: Quickly save and load frequently used packet configurations.
- **Dark Mode**: A sleek dark theme for improved visibility in low-light environments.
- **Basic Encryption**: An easy way to encode text-based messages as numbers so projects can receive them.
