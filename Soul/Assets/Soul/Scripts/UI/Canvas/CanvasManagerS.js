#pragma strict

public static var canvasc : CanvasManagerS;

var remoteIPText : UnityEngine.UI.InputField;
var remotePortText : UnityEngine.UI.InputField;

function Awake () 
{  
      if(Network.peerType == NetworkPeerType.Disconnected)
      {
          remoteIPText.text = DirectConnection.remoteIPadress;
          remotePortText.text = DirectConnection.remotePort.ToString();
      }
}
