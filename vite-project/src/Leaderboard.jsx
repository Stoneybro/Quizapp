import Bnavbar from './bottomnavbar'
import crown from './Group.svg'
export default function leaderboard(params) {
    return(
        <div className='leader-board'>
            <div className="leaders">
                <h3>Leaderboard</h3>
                <div className="first-leader">
                <div><img src={crown} alt="" width={40} /></div>
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