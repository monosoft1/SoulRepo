#pragma strict

public static var Health : int = 100;
var HealthStatus : int = Health;
private var bullet : GameObject;
var damage : int;

var Team : String = "";

function Start ()
{
   Team = SpawnManager.CurTeam;
   
   if(GetComponent.<NetworkView>().isMine == true)
   {
      enabled = true;
   }
}

public static var control : Health;

function Update () 
{
   var HealthStatus : int = Health;

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
   if(hit.gameObject.tag == "RedBullet" && Team == "Blue")
   {
      bullet = hit.gameObject;
      TakeDamage();
   }
   if(hit.gameObject.tag == "BlueBullet" && Team == "Red")
   {
      bullet = hit.gameObject;
      TakeDamage();
   }
}

function TakeDamage()
{
   var BulletScript : Bullet = bullet.GetComponent(Bullet);
   damage = BulletScript.Damage;
   Health -= damage;
}

function DIE()
{
   Debug.Log("I am Gone");
   Network.Destroy(gameObject);
   SpawnManager.control.Dead = true;
}