#pragma strict

var Health : int = 100;
var bullet : GameObject;
var damage : int;

function Update () 
{
   if(Health < 0)
   {
      DIE();
   }
}

function OnGUI ()
{
   
}

function OnTriggerEnter (hit : Collider) 
{
   if(hit.gameObject.tag == "RedBullet")
   {
      bullet = hit.gameObject;
      TakeDamage();
   }
   if(hit.gameObject.tag == "BlueBullet")
   {
      bullet = hit.gameObject;
      TakeDamage();
   }
}

function TakeDamage()
{
   var BulletScript : Bullet = bullet.GetComponent("Bullet");
   damage = BulletScript.Damage;
   Health -= damage;
}

function DIE()
{
   Debug.Log("I am Gone");
   Network.Destroy(gameObject);
   SpawnManager.SControl.Dead = true;
}