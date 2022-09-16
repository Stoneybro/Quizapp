import Bnavbar from './bottomnavbar'
export default function leaderboard(params) {
    return(
        <div className='leader-board'>
            <div className="leaders">
                <h3>Leaderboard</h3>
                <div className="first-leader">
                    {/* <img src="" alt="" /> */}1
                    <div className="leader-profile">K</div>
                    <div className="leader-point">300</div>
                    <div className="leader-username">kevin99</div>
                    
                </div>
            </div>
            <div className="leaderboard-list">
               <div className="user">
                    <div className="boardlist-no">1</div>
                        <div className="boardlist-profile">K</div>
                        <div className="boardlist-username">Kevin 99</div>
                        <div className="boardlist-points">300</div>
               </div>
            </div>
            <Bnavbar />
        </div>
    )
}