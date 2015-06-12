#pragma strict

var SpeedBullet : float = 500;
public static var Damage : int = 30;
var DamageStatus : int = Bullet.Damage;
var trans : Transform;

function Start () 
{
   trans = gameObject.transform;
   GetComponent.<Rigidbody>().AddForce(trans.forward * SpeedBullet);
}

function Update()
{
   Bullet.Damage = DamageStatus;
}