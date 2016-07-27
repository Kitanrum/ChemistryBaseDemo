using UnityEngine;
using System.Collections;

public class PhysicalBehaviour : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

    void OnTriggerEnter(Collider other) {

        if(other.gameObject.tag == "Phsyical") {
            Debug.Log("RIGHT");
            Destroy(other.gameObject);
        }
        else if(other.gameObject.tag == "Chemical"){
            Debug.Log("WRONG");
            Destroy(other.gameObject);
        }
    }
}
