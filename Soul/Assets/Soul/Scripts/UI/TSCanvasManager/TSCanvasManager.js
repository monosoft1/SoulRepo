#pragma strict

var TSContent : GameObject;
var RespawnB : GameObject;

function Start () 
{
  
}

function Update () 
{
   if(SpawnManager.CurTeam == "")
   {
      
   }
   else
   {
      RespawnB.SetActive(true); 
   }
}