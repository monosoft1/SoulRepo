#pragma strict

var RedBullet : GameObject;
var BlueBullet : GameObject;
var FirePoint : Transform;
public static var Ammo : int = 100;

public static var control : Gun;

var ShootSound : AudioSource;
var OutOfAmmoSound : AudioSource;

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
          if(Gun.Ammo > 0)
          {
            FireOneBullet();
            ShootSound.Play();
          }
          else
          {
            OutOfAmmoSound.Play();
          }
        }
     }
  }
  else
  {
     enabled = true;
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