#pragma strict



function RBFunction () 
{
   if(SpawnManager.CurTeam == "Red")
   {
      Network.Instantiate(SpawnManager.SControl.RedPlayer, SpawnManager.SControl.SpawnPointRed.transform.position, SpawnManager.SControl.SpawnPointRed.transform.rotation, 0);
      SpawnManager.SControl.Dead = false;
   }
   if(SpawnManager.CurTeam == "Blue")
   {
      Network.Instantiate(SpawnManager.SControl.BluePlayer, SpawnManager.SControl.SpawnPointBlue.transform.position, SpawnManager.SControl.SpawnPointBlue.transform.rotation, 0);
      SpawnManager.SControl.Dead = false;
   }
}