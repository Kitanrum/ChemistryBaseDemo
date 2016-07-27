import UnityEngine;
import System.Collections;
import System.Collections.Generic;

var blockPos : Vector3;
var block : GameObject;
var moveDelay : float;
var movement : float;
var i : int = 0;
var roll : DiceRoll;

function Start(){
    //blockPos = transform.Position;

    roll = block.GetComponent("DiceRoll") as DiceRoll;
    Debug.Log("Roll the dice!");
    
}
function Update () {

    movement = roll.diceRoll;

    if(i <= movement){
        StartCoroutine(MoveBlock());
        StartCoroutine(RotateBlock());
        Debug.Log("You have " + (movement - i) + " moves left");
    }
    else{
        i = 0;
        Debug.Log("Roll the dice again!");
    }

}

function MoveBlock(){

    if( i < movement){
        if(Input.GetKeyDown(KeyCode.S)){
        
            blockPos = Vector3(0, 0, -1);
            transform.Translate(blockPos);
        
            moveDelay = Mathf.Max(0.5, moveDelay - 0.01);
            
            i++;

            yield WaitForSeconds(moveDelay);

        }

        if(Input.GetKeyDown(KeyCode.A)){
        
            blockPos = Vector3(-1, 0, 0);
            transform.Translate(blockPos);
        
            moveDelay = Mathf.Max(0.5, moveDelay - 0.01);

            i++;

            yield WaitForSeconds(moveDelay);
        }
        if(Input.GetKeyDown(KeyCode.D)){
        
            blockPos = Vector3(1, 0, 0);
            transform.Translate(blockPos);
        
            moveDelay = Mathf.Max(0.5, moveDelay - 0.01);

            i++;

            yield WaitForSeconds(moveDelay);
        }

    }
    
}

function RotateBlock(){
    
    if(Input.GetKeyDown(KeyCode.E)){

        blockPos = Vector3(0,90,0);
        transform.Rotate(blockPos);

        moveDelay = Mathf.Max(0.5, moveDelay - 0.01);
        i++;
        yield WaitForSeconds(moveDelay);
    }

    if(Input.GetKeyDown(KeyCode.Q)){

        blockPos = Vector3(0,-90,0);
        transform.Rotate(blockPos);

        moveDelay = Mathf.Max(0.5, moveDelay - 0.01);
        i++;
        yield WaitForSeconds(moveDelay);
    }
}