// WebSocket connection object
let socket;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'handshake') {
    console.log('Received handshake request from extension popup');
    initiateHandshake(message.packetName, message.userName, message.projectId);
    sendResponse({ status: 'Handshake initiated' });
  }
  if (message.action === 'sendCloudUpdate') {
    const { variableName, value, userName, projectId } = message;
    sendCloudUpdate(variableName, value, userName, projectId);
    sendResponse({ status: `Cloud variable update sent: ${variableName} = ${value}` });
  }
});
function initiateHandshake(packetName, userName, projectId) {
  socket = new WebSocket('wss://clouddata.scratch.mit.edu/');
  socket.onopen = function() {
    console.log('WebSocket connection opened');
    const handshakePacket = JSON.stringify({
      name: packetName,
      user: userName,
      project_id: projectId
    }) + '\n';
    socket.send(handshakePacket);
    console.log('Sent Handshake Packet:', handshakePacket);
    updateResponseTextarea('Sent Handshake: ' + handshakePacket);
  };
  socket.onmessage = function(event) {
    updateResponseTextarea('Received: ' + event.data);
    console.log('Received WebSocket message:', event.data);
  };
  socket.onclose = function() {
    console.log('WebSocket connection closed');
  };
  socket.onerror = function(error) {
    console.log('WebSocket error: ', error);
  };
}
function sendCloudUpdate(variableName, value, userName, projectId) {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    alert('WebSocket connection is not open. Please perform the handshake first.');
    return;
  }
  const cloudUpdatePacket = JSON.stringify({
    method: 'set',
    user: userName,
    project_id: projectId,
    name: `☁ ${variableName}`,
    value: value
  }) + '\n';
  socket.send(cloudUpdatePacket);
  console.log('Sent Cloud Update Packet:', cloudUpdatePacket);
  updateResponseTextarea('Sent Cloud Update: ' + cloudUpdatePacket);
}
function updateResponseTextarea(text) {
  chrome.runtime.sendMessage({ action: 'updateTextarea', text: text });
}