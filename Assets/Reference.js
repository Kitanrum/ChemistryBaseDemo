@script RequireComponent(CharacterController);
private var controller : CharacterController;
controller = gameObject.GetComponent(CharacterController);

private var currentPosition: Vector3;
private var moveDirection : Vector3;
private var forward = Vector3.forward;
private var right = Vector3.right;
private var left = Vector3.left;
private var t : float;

function Start(){

    currentPosition = transform.position;
}

function Update () {

    var horizontalInput = Input.GetAxisRaw("Horizontal");
    var verticalInput = Input.GetAxisRaw("Vertical");

    if(horizontalInput >= 0){

        moveDirection = right;

        t = Mathf.Clamp01(Time.deltaTime + t);
        transform.position = currentPosition + (moveDirection * t);
    }

    if(horizontalInput <= 0){

        moveDirection = left;

        t = Mathf.Clamp01(Time.deltaTime + t);
        transform.position = currentPosition + (moveDirection * t);
    }

    if(verticalInput){
        moveDirection = forward;

        t = Mathf.Clamp01(Time.deltaTime + t);
        transform.position = currentPosition + (moveDirection * t);
    }
}