#pragma strict

function Clicked () 
{
   if(Network.peerType == NetworkPeerType.Disconnected)
   {
       Network.useNat = DirectConnection.control.useNAT;
       Network.InitializeServer(DirectConnection.control.MaxPlayers, DirectConnection.control.listenPort);
   }
}
