#pragma strict

var remoteIPadress = "127.0.0.1";
var remotePort = 25000;
var listenPort = 25000;

var useNAT = true;
var myIP = "";
var myPort = "";

var MaxPlayers = 32;

public static var control : DirectConnection;  

function OnConnectedToServer()
{
    
}

function OnDisconnectedFromServer()
{
    
}

function OnGUI()
{
   if(Network.peerType == NetworkPeerType.Disconnected)
   {
      remoteIPadress = GUI.TextField(Rect(5, 75, 60, 30),remoteIPadress);
      remotePort = parseInt(GUI.TextField(Rect(5, 110, 60, 30),remotePort.ToString()));
   }
}