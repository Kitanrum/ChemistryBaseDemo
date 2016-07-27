using UnityEngine;
using System.Collections.Generic;

public class Shooter : MonoBehaviour {

    public BulletManager _bullet;
    public Transform playerCanon;
    private Rigidbody instance;

    public AudioClip shootSound;
    public AudioClip hitSound;

    public float laserDistance = 0.02f;
    public float fireDelay = 0.3f;
    public float nextFire = 0.0f;
    public float speed = 5.0f;
    //int timer = 30;
    //bool dead;

    public List<KeyCode> shootButton;

    // Use this for initialization
    void Start () {

        //playerCanon = transform.Find("BulletSpawnPoint");


    }
	
	// Update is called once per frame
	void Update () {


        foreach (KeyCode element in shootButton)
        {
                        
            Vector3 fwd = playerCanon.TransformDirection(Vector3.forward);

            if (Input.GetKeyDown(element))
            {
                instance = (Rigidbody)Instantiate(_bullet.bullet, playerCanon.transform.position, playerCanon.transform.rotation);
                instance.transform.parent = playerCanon.transform;
                instance.AddForce(0, 0, 0);

                if (Input.GetKeyUp(element) && nextFire < 0)
                {
                    _bullet.Movement();
                    instance.AddForce(fwd * 1500);
                    nextFire = fireDelay;

                    break;
                }
            }


        }
        nextFire -= Time.deltaTime;
	}

    void Shoot() {

    }

}
