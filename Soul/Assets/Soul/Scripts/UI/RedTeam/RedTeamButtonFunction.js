#pragma strict

function RTFunction () 
{
     if(SpawnManager.CurTeam == "")
     {
        SpawnManager.TSCanvasO.SetActive(false);
        SpawnManager.CurTeam = "Red";
        Network.Instantiate(SpawnManager.RedPlayer, SpawnManager.SpawnPointRed.transform.position, GameObject.FindGameObjectWithTag("SpawnM").transform.rotation, 0);
        SpawnManager.Dead = false;
     }  
}