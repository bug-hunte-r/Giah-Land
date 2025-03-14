import React from 'react'
import './House-Plants-bottom.css'
import HousePlantsBottomCards from './House-Plants-bottom-cards/House-Plants-bottom-cards'

export default function HousePlantsBottom() {

  let fourCardsHousePlantsBottomInfos = [
    { id: 1, name: 'گیاه بونسای', img: 'https://s3-alpha-sig.figma.com/img/b798/fbaa/952965b2c0ac8708235ecc9d8aae0217?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UHD0ASb-lX6fr2pOkoQKxK9LDdTYqfa9gs6Xzhh6HIYVsc3JtG8GCdGeBGK9sWH0LYdNrV7yxhawpLAxvqDn9AmLEmatSaghJa9Ksy2AasFkOTt8hl2PJ~WSVqEIvSbJ1vde0hP-p4Pzg~uVIysgFyQ9u~GkIlIfQrRLEDcjijmz0AMN16-y3Ss~oSu2QhI~Ds7NnStlJs6giIitxVPM8vh0JHw12rVQvT~7yDYxCQJbYWc0aGkeczCwH2dAnBqHQcGU7CxEbnbKnQdOGs4VZDa-LAe1GKZcic5jGLMM~7DxioRj6XL5ZLb5o5xpm3Wur6pmMCR1pi3L03d-mqmZZw__' },
    { id: 2, name: 'گیاه سانسوریا', img: 'https://s3-alpha-sig.figma.com/img/7a35/e08e/257f382a0a81569b76df9c31d68b31cd?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G~tCN7c1JmEb06dwg0jTy4DCW3PP1KfFBwhQpX7Oma8ZO0kTtlnClCkvEOB0LWk0JD5aVwzw4gq2rqVJgT0Ll88-BMJoQuY7U9X1xrSE-eTz99U1~wqZb3mfVhZv04Y4JJiywAX~PY8hEOOvgrz4nlLNhQ1xf7O4gqvchuKdgv7VckMu1Xzg4dWHLTu1ent4K-W2B98LvU8jdJCqo7rAE2qUENr4D6zlYA0Sym2ra744MUorp-ot58edJwy0QlK~7IokQTQGqGlgX-92weUZGOP1mM6MAt3LK1bkOYN535L4Lvq8tvGK~Qbp~nT7BDJMS-TYIdxVztXwFYImE9w7NQ__' },
    { id: 3, name: 'گیاه پتوس', img: 'https://s3-alpha-sig.figma.com/img/25b3/81e1/7b6c12626d7c56481b020623973dfa3b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U1Ehnm6T7jmknaHIByjJ~4Ro-6Ics3o8rumQr3d6HILgo3y6qlnhQYWmRjMxVdUpJ7eBN0MQvDhDJxYvcUngd8~ar8o6dVyIjyeOZlzFSczdOIvydXGokWmHkZAtQ2Flq5a8A91roDBSbm6GjeU3NMysB2v35LdliqtcLEh9mY-7LerVNYH0r-~vmGrQPLTtsbQgU8x2C4JgWzeY0Z8qtJyuQnK8SdIRoNNkj3YVtRRaHUb7n4GoYEex29VzprWMHSP5-AAyxHEl0qREnXkFAK~f8H4-o6zllB4sf7nMDs6v3EPaipLHdaKXZLNe8w2crmL-BbQ1tgTY92TW~OlBbA__' },
    { id: 4, name: 'گیاه پاچیرا', img: 'https://s3-alpha-sig.figma.com/img/d659/1f1b/f701cfd22c0b2b9d1f7cf4f72f14225b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=agjLol1~hYkQVxHE3f8QzKEZRtqzz3YL9VTSWJbgrQxg4lFGRffPtpghpXbmHkAc-xfbWxwWwC4M7eLUHJodUBrncePkpS~8rN-L0AiNygFpFSr~gvwdl3kuQmdfXS7hpCncW0ojDlgJ~Ers7SWNsye2VcLxc~el-WQx1tLxSYCz7Vc3O5MHMIB0vTmr9bTLWkqH8rI6hwSH6HRPRPrrsSmrcZochEXwbXXscyMxnjPl6zFCVqW6dE9KHlDhKPqs2501kP2eqvHxVMPS9Bvhw0n9M-VAtPRVQ3KP9pMRdg6OyhxFOej99Iv9YMqzGl4RA8pQ2EmKelVHRc~S0O~5iA__' }
  ]

  return (
    <div className='container'>

      {fourCardsHousePlantsBottomInfos.map((cards) => (
        <div className="container-House-Plants-bottom-cards" key={cards.id}>
          <HousePlantsBottomCards name={cards.name} img={cards.img} />
        </div>
      ))}
      
    </div>
  )
}
