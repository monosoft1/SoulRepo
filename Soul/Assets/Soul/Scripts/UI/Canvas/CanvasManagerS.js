#pragma strict

public static var canvasc : CanvasManagerS;

var networkDisconnectButtons : GameObject;
var disconnectButton : GameObject;

function Awake () 
{
   if(Network.peerType != NetworkPeerType.Disconnected)
   {
       Destroy(networkDisconnectButtons);
       disconnectButton.active = true;
   }
}
