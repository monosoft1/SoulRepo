#pragma strict

function Clicked () 
{
   if(Network.peerType == NetworkPeerType.Disconnected)
   {
       Network.useNat = DirectConnection.control.useNAT;
       Network.Connect(DirectConnection.control.remoteIPadress, DirectConnection.control.remotePort);
   }
}