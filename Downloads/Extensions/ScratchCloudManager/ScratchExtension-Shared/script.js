document.getElementById('submitButton').addEventListener('click', function() {
  const packetName = document.getElementById('name').value;
  const userName = document.getElementById('user').value;
  const projectId = document.getElementById('project_id').value;
  if (packetName && userName && projectId) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'handshake',
        packetName: packetName,
        userName: userName,
        projectId: projectId
      }, function(response) {
        console.log('Response from content script:', response);
      });
    });
  } else {
    alert('Please fill out all fields!');
  }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'updateTextarea') {
    const responseElement = document.getElementById('response');
    if (responseElement) {
      responseElement.value += message.text + '\n';
    }
  }
});
document.getElementById('sendActionSubmitButton').addEventListener('click', function() {
  const variableName = document.getElementById('var_name').value;
  const value = document.getElementById('value').value;
  const userName = document.getElementById('user').value;
  const projectId = document.getElementById('project_id').value;
  if (variableName && value && userName && projectId) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'sendCloudUpdate',
        variableName: variableName,
        value: value,
        userName: userName,
        projectId: projectId
      }, function(response) {
        console.log('Response from content script:', response);
      });
    });
  } else {
    alert('Please fill out all fields!');
  }
});
function openTab(tabId) {
  let tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
    tabContents[i].classList.remove("active");
  }
  let tabButtons = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  document.getElementById(tabId).style.display = "block";
  document.getElementById(tabId).classList.add("active");
}
document.getElementById('handshakeTab').addEventListener('click', function() {
  openTab('Handshake');
});
document.getElementById('sendActionTab').addEventListener('click', function() {
  openTab('SendAction');
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("Handshake").style.display = "block";
});
