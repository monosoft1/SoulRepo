#pragma strict

function Clicked () 
{
  if(SpawnManager.Connection == true)
  {
        Network.Disconnect(200);
        SpawnManager.NDisconnectB.SetActive(true);
        SpawnManager.Connection = false;
  }
}
