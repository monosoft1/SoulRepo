#pragma strict

public static var remoteIPadress : String = "127.0.0.1";
public static var remotePort = 25000;
public static var listenPort = 25000;

var remoteIPT : String = DirectConnection.remoteIPadress;
var remotePortT : String = DirectConnection.remotePort.ToString();
var listenPortStatus : String = DirectConnection.listenPort.ToString();

public static var useNAT = true;
var myIP = "";
var myPort = "";

var MaxPlayerStatus : String = DirectConnection.MaxPlayers.ToString();
public static var MaxPlayers = 32;

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
     
   }
}

function Update ()
{
   remoteIPT = DirectConnection.remoteIPadress;
   remotePortT = DirectConnection.remotePort.ToString();
}