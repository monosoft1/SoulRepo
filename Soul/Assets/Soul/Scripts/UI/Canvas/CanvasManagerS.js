#pragma strict

public static var canvasc : CanvasManagerS;

var networkDisconnectButtons : GameObject;
var disconnectButton : GameObject;

var remoteIPText : UnityEngine.UI.InputField;
var remotePortText : UnityEngine.UI.InputField;

function Awake () 
{
   if(Network.peerType == NetworkPeerType.Disconnected)
   {
       remoteIPText.text = DirectConnection.remoteIPadress;
       remotePortText.text = DirectConnection.remotePort.ToString();
   }
   else if(Network.peerType != NetworkPeerType.Disconnected)
   {
       Destroy(networkDisconnectButtons);
       disconnectButton.active = true;
   }
}

function Update () 
{
   
}
