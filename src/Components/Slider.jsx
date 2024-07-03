import React from 'react'

const Slider = () => {
  return (

    <>
    <div id="carouselExampleControlsNoTouching" className="carousel slide pt-1" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://imgs.search.brave.com/rphNiKJESmdqUAPeJLI8OUJkQ-LfoXg-zW_VLoe7iLA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXZl/LXByb2R1Y3Rpb24u/d2Ntcy5hYmMtY2Ru/Lm5ldC5hdS8zZTcy/Y2ZkMWU1NGViNzM4/ZTdjYjU3ZTFlYTAx/Zjc5Mz9pbXBvbGlj/eT13Y21zX2Nyb3Bf/cmVzaXplJmNyb3BI/PTgwMCZjcm9wVz0x/MjAwJnhQb3M9MCZ5/UG9zPTAmd2lkdGg9/ODYyJmhlaWdodD01/NzU" className="d-block w-100 " alt="..." style={{height:'70vh', objectFit:'cover'}}/>
    </div>
    <div className="carousel-item">
      <img src="https://imgs.search.brave.com/cHD4wxkeudx-WY4gpQe2NM5sXNtq9fe5T0uTsBA2p_w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/NDU3NTE2Ni9waG90/by9kb2RnZXJzLXZz/LW1ldHMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVBYSnd2/OWFDbGNleDY2b1BT/MDlWaDlSZE5QWTJI/ZzdiYjJJb1hubkNX/OTA9" className="d-block w-100" alt="..." style={{height:'70vh', objectFit:'cover'}}/>
    </div>
    <div className="carousel-item">
      <img src="https://imgs.search.brave.com/JHitteonDYGWoogQSCSeKkfrtFyh4fGFjrNKAUS243Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODg1NjEz/ODMyMDMtMzFmZWQz/ZDg1NDE3P3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVROOGZHNWxkM044/Wlc1OE1IeDhNSHg4/ZkRBPQ.jpeg" className="d-block w-100" alt="..." style={{height:'70vh', objectFit:'cover'}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></>

  )
}

export default Slider