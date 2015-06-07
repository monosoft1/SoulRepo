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

function OnTriggerEnter (hit : Collider) 
{
   if(hit.gameObject.tag == "Bullet")
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
   Destroy(gameObject);
}