#pragma strict


function Clicked () 
{
    SpawnManager.Connection = true;
    Network.useNat = DirectConnection.control.useNAT;
    Network.InitializeServer(DirectConnection.MaxPlayers, DirectConnection.listenPort);
    SpawnManager.TSCanvasO.SetActive(true);
    SpawnManager.NDisconnectB.SetActive(false);
}
