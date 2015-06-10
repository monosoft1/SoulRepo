var speed = 6.0;
var jumpSpeed = 8.0;
var gravity = 20.0;

private var moveDirection = Vector3.zero;
private var grounded : boolean = false;

function FixedUpdate()
{
   if(GetComponent.<NetworkView>().isMine == true)
   {
      if(grounded)
      {
         moveDirection = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
         moveDirection = transform.TransformDirection(moveDirection);
         moveDirection *= speed;
         
         if(Input.GetButton("Jump"))
         {
            moveDirection.y = jumpSpeed;
         }
      }
      
      moveDirection.y -= gravity * Time.deltaTime;
      
      var controller : CharacterController = GetComponent(CharacterController);
      var flags = controller.Move(moveDirection * Time.deltaTime);
      grounded = (flags & CollisionFlags.CollidedBelow) != 0;
   }
}

@script RequireComponent(CharacterController)