#pragma strict

var RedBullet : GameObject;
var BlueBullet : GameObject;
var FirePoint : Transform;
public static var Ammo : int = 30;

public static var control : Gun;

var ShootSound : AudioSource;

var FireMode : String = "Semi";
var Team : String = "";

function Start () 
{
   Team = SpawnManager.CurTeam;
}

function Update () 
{
  if(GetComponent.<NetworkView>().isMine == true)
  {
    if(FireMode == "Semi")
    {
       if(Input.GetMouseButtonDown(0))
       {
          FireOneBullet();
          ShootSound.Play();
       }
    }
   }
}

function FireOneBullet()
{
   if(Team == "Blue")
   {
      Instantiate(RedBullet, FirePoint.position, FirePoint.rotation);
      Ammo--;
   }
   if(Team == "Red")
   {
      Instantiate(BlueBullet, FirePoint.position, FirePoint.rotation);
      Ammo--;
   }
    
}