import React from 'react'
import data from './CA.json'
import { useParams } from 'react-router-dom'
import './individual.css'

const Individual = () => {

  const { id } = useParams();
  const selectedItem = data.find((val) => val.id === parseInt(id));

  console.log(selectedItem);





  return (

    <>


      {/* // <div>
    //     <div className="image">
    //         <img src={selectedItem.image} style={{ height:"100px"}}alt="" />
    //         <p>{selectedItem.name}</p>
    //         <p>{selectedItem.id}</p>
    //         <p>{selectedItem.price}</p>
    //         <p>{selectedItem.intro}</p>
    //         <p>{selectedItem.rating}</p>
    //         <p>{selectedItem.reviewCount}</p>
    //         <p>{selectedItem.about.averageResponseTime}</p>
    //         <p>{selectedItem.about.description}</p>
    //         <p>{selectedItem.about.from}</p>
    //         <p>{selectedItem.about.partnerSince}</p>
    //         
    //         <p>{selectedItem.testimonial.text}</p>
          
    //       {
    //         selectedItem.about.benefits.map((value)=>
    //         {
    //           return(
    //             <>
    //               <p>{value}</p>
    //             </>
    //           )
    //         })
    //       }
    {
            selectedItem.about.services.map((value)=>
            {
              return(
                <>
                  <p>{value}</p>
                </>
              )
            })
          }
    //     
            
    //     </div>
    // </div> */}


    <div class="main-content">
    <h2 class="info mb-5">
    <div className="info2"> 
    Accountant Information
    </div>
  
    </h2>
    <div class="container mt-7">
  
     
      <div class="row content">
        <div class="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
          <div class="card shadow">

            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src={selectedItem.image}/>
                  </a>
                </div>
              </div>
            </div>

            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-sm btn-info mr-4">Connect</a>
                <a href="#" class="btn btn-sm btn-default float-right">Message</a>
              </div>
            </div>

            <div class="card-body pt-0 pt-md-4">
              <div class="row">
                <div class="col">
                  <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span class="heading">{selectedItem.price}</span>
                      <span class="description">price</span>
                    </div>
                    <div>
                      <span class="heading">{selectedItem.rating}</span>
                      <span class="description">rating</span>
                    </div>
                    <div>
                      <span class="heading">{selectedItem.reviewCount}</span>
                      <span class="description">Review count</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center">
                <h3>
                  {selectedItem.name}<span class="font-weight-light"></span>
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>{selectedItem.about.from}
                  <span>{" "+selectedItem.about.averageResponseTime}</span>
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>{selectedItem.taskComplexity}
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>{selectedItem.intro}
                </div>
                <hr class="my-4"/>
                <p>{selectedItem.about.description}</p>
             
              <div>
                <p>{selectedItem.testimonial.text}</p>
              <p> PartnerSince- {selectedItem.about.partnerSince}</p>

              
              {
            selectedItem.about.services.map((value)=>
            {
              return(
                <>
                  <p>Services-{value}</p>
                </>
              )
            })
          }
           {
            
            selectedItem.about.benefits.map((value)=>
            {
              return(
                <>
                  <p>Benefits-{value}</p>
                </>
              )
            })
          }
           
           </div>
           </div>



          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="row align-items-center justify-content-xl-between">
      <div class="col-xl-6 m-auto text-center">
        <div class="copyright">
          <p>Author is {selectedItem.testimonial.author}</p>
        </div>
      </div>
    </div>
  </footer>

      
       
    </>
  )
}

export default Individual
