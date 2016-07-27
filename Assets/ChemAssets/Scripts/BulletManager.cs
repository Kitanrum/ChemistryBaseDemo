using UnityEngine;
using System.Collections;

public class BulletManager : MonoBehaviour {



    public GameObject bullet;
    public float lifetime = 2.0f;
    public float speed = 5.0f;

    // Use this for initialization
    void Start () {
        ChooseType();
    }
	
	// Update is called once per frame
	void Update () {

        

    }

    public void Movement() {

        transform.Translate(Vector3.forward * Time.deltaTime * speed);
    }
    

    void ChooseType() {

        int[] randomProp = new int[2] { 1, 2 };
        int prop = randomProp[Random.Range(0, randomProp.Length)];

        if (prop == 1) {

            bullet.gameObject.tag = "Physical";
            Debug.Log("I am a Physical Property");

        }
        else {

            bullet.gameObject.tag = "Chemical";
            Debug.Log("I am a Chemical Property");
        }           
    }
}
