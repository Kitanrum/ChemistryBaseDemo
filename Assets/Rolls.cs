using UnityEngine;
using System.Collections;

public class Rolls : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

        StartCoroutine(Rolled());
	
	}

    IEnumerator Rolled() {
        if (Input.GetButtonUp("Fire1"))
        {
            transform.Translate(130.0f * Vector3.up * Time.deltaTime, Space.World);
            transform.Rotate(75.0f * Vector3.left , Space.World);
                       
        }

        yield return new WaitForSeconds(5);

    }
}
