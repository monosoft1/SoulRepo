#pragma strict

function Clicked () 
{
   if(Network.peerType == NetworkPeerType.Disconnected)
   {
       Network.useNat = DirectConnection.useNAT;
       Network.Connect(DirectConnection.remoteIPadress, DirectConnection.remotePort);
   }
}