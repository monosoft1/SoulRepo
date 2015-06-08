#pragma strict



function BTFunction () 
{
   Network.Instantiate(SpawnManager.SControl.BluePlayer, SpawnManager.SControl.SpawnPointBlue.transform.position, SpawnManager.SControl.SpawnPointBlue.transform.rotation, 0);
   SpawnManager.CurTeam = "Blue";
   SpawnManager.SControl.Dead = false;
}
