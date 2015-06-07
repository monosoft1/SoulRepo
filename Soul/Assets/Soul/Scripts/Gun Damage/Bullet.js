#pragma strict

var SpeedBullet : float = 500;
var Damage : int = 30;
var trans : Transform;

function Start () 
{
   trans = gameObject.transform;
   GetComponent.<Rigidbody>().AddForce(trans.forward * SpeedBullet);
}