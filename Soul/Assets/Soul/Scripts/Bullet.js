#pragma strict

var SpeedBullet : float = 500;
var trans : Transform;

function Start () 
{
   GetComponent.<Rigidbody>().AddForce(trans.GetComponent.<Rigidbody>().transform.forward * SpeedBullet * Time.deltaTime);
}