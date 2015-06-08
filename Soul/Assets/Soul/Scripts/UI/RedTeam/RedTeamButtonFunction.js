#pragma strict



function RTFunction () 
{
   Network.Instantiate(SpawnManager.SControl.RedPlayer, SpawnManager.SControl.SpawnPointRed.transform.position, SpawnManager.SControl.SpawnPointRed.transform.rotation, 0);
   SpawnManager.CurTeam = "Red";
   SpawnManager.SControl.Dead = false;
}
