#pragma strict

var Bullet : GameObject;
var FirePoint : Transform;
var Ammo : int = 30;

var ShootSound : AudioSource;

var FireMode : String = "Semi";

function Start () 
{
   
}

function Update () 
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

function FireOneBullet()
{
    Instantiate(Bullet, FirePoint.position, FirePoint.rotation);
    Ammo--;
}