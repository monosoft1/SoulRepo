#pragma strict



function RBFunction () 
{
   if(SpawnManager.control.Dead == true && SpawnManager.Connection == "true")
   {
      if(SpawnManager.CurTeam == "Red")
      {
        Network.Instantiate(SpawnManager.control.RedPlayer, SpawnManager.control.SpawnPointRed.transform.position, SpawnManager.control.SpawnPointRed.transform.rotation, 0);
        SpawnManager.control.Dead = false;
      }
      if(SpawnManager.CurTeam == "Blue")
      {
        Network.Instantiate(SpawnManager.control.BluePlayer, SpawnManager.control.SpawnPointBlue.transform.position, SpawnManager.control.SpawnPointBlue.transform.rotation, 0);
        SpawnManager.control.Dead = false;
      }
      else
      {
         
      }
   }
}