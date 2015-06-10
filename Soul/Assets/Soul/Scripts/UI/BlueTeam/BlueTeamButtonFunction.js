#pragma strict

var TSBox : GameObject;

function BTFunction () 
{
     if(SpawnManager.CurTeam == "")
     {
        SpawnManager.TSCanvasO.SetActive(false);
        Network.Instantiate(SpawnManager.BluePlayer, SpawnManager.SpawnPointBlue.transform.position, GameObject.FindGameObjectWithTag("SpawnM").transform.rotation, 0);
        SpawnManager.CurTeam = "Blue";
        SpawnManager.Dead = false;
        SpawnManager.PlayerStatus.SetActive(true);
     }
}
