import { MapPin, Clock, Briefcase } from "lucide-react";
import {Link} from "react-router-dom";

function JobDetails() {
    return (
        <div className="px-5 md:px-10 mt- rounded-md bg-[#f9fafb] border border-gray-100">

            <div className="mt-5 md:mt-14">
                <div className="w-full px-5 py-5 bg-white rounded-lg shadow-sm">
                    <div className='flex justify-between items-center'>

                        <h3 className="text-lg font-bold">Software Developer</h3>

                        <div className=' mt-2'>
                            <Link to="/jobApplication" className="bg-black text-white px-2 py-2 rounded-md hover:cursor-pointer">
                                Apply now
                            </Link>
                        </div>
                    </div>

                    <h4 className="text-md">Company: Tech Corp</h4>
                    <ul className='flex gap-5 text-gray-500 text-sm mt-5'>
                        <li className='flex items-center gap-1'>
                            <div><MapPin size={16} /> </div>
                            <div>Texas</div>
                        </li>
                        <li className='flex items-center gap-1'>
                            <div><Clock size={16} /> </div>
                            <div>Full-time</div>
                        </li>
                        <li className='flex items-center gap-1'>
                            <div><Briefcase size={16} /> </div>
                            <div>Mid-level</div>
                        </li>
                        <li className='flex items-center gap-1'>
                         1 day
                        </li>
                    </ul>

                    <p className='mt-5 text-gray-500 text-sm hover:cursor-pointer'>
                        We are seeking a passionate and skilled Software Developer to join our growing team. As a Software Developer, you will be responsible for designing, developing, and maintaining high-quality software applications that solve real-world problems and deliver outstanding user experiences. You'll collaborate with cross-functional teams, contribute to system architecture, and continuously improve codebase quality.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates, facere, exercitationem repellat accusantium doloribus aut, vel neque inventore nihil saepe minus explicabo facilis porro! Illum non repellat blanditiis aut nemo sint distinctio? Consequatur non incidunt, necessitatibus iste exercitationem quasi nobis ut. Maiores recusandae, beatae ipsam eveniet totam, velit, facere reprehenderit placeat nostrum omnis perspiciatis temporibus repellendus assumenda obcaecati. Earum rem laboriosam vel possimus tempora maxime minima accusamus ducimus veniam. At repellat, nam commodi maiores possimus deleniti esse distinctio facere aperiam suscipit illo aspernatur corrupti! Quidem beatae at non repellat ea labore, mollitia, cumque aut nisi recusandae corrupti sunt nesciunt illo nulla odio laboriosam consectetur vitae distinctio quibusdam, velit accusamus ipsam eum magnam reiciendis. Similique odio illum ex earum distinctio aliquam obcaecati minus neque omnis rem voluptas tenetur nisi alias veritatis dolor nostrum perspiciatis, magnam suscipit ullam ut mollitia inventore quam minima. Sapiente dicta temporibus esse nesciunt facilis quibusdam doloribus deleniti maxime molestias reprehenderit, rerum voluptate, iste dignissimos. Rem, eos, eligendi exercitationem quia corporis aperiam sed rerum excepturi praesentium dignissimos laborum deserunt? Distinctio quaerat atque tempore sequi voluptatibus doloribus voluptates eos blanditiis suscipit hic facere nihil illum eligendi perspiciatis saepe libero, aperiam veritatis ut quia aliquam, corporis vel laborum? Consequuntur sed accusamus sequi velit voluptates labore beatae officia neque maxime saepe aut commodi iure, inventore, veritatis voluptatem, dolorem deserunt cumque? Ea, sequi nemo? Libero, nobis reiciendis iure ducimus deleniti in odit nostrum eos ab quidem voluptas ad, consectetur, debitis architecto quia pariatur? Repellat quibusdam laboriosam sapiente labore culpa tenetur recusandae, doloremque obcaecati tempore sint iste quis, perferendis quod beatae quos, voluptatibus ut minima dolores praesentium vel aut dolor id ex. Odio dolores temporibus illo voluptas animi dignissimos. Doloremque, expedita iure labore vel suscipit quod modi hic ullam ab repudiandae sint laborum, recusandae ipsa quos animi tempora non. Quod, ducimus dolorum!

                    </p>

                    <p className='mt-5 text-gray-500 text-sm hover:cursor-pointer'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam asperiores est harum illum impedit tempora aspernatur hic ab. Maiores consequatur sequi, ad quod nihil voluptatem, nobis reiciendis labore minima, eligendi soluta porro! Nobis vitae illo eius placeat consequatur nostrum itaque commodi doloremque aut totam vel magnam, quos nemo explicabo ut sint et iste possimus? Nesciunt numquam amet possimus nobis autem quisquam soluta beatae, ab voluptate est! Ratione ad nam qui nihil? Nostrum omnis sapiente tempora? Deserunt eaque ratione autem dignissimos quam, repudiandae sit animi omnis rem consectetur nemo pariatur. Consequuntur dolorum molestias temporibus vitae quod adipisci animi officia perferendis.
                    </p>
                    <p className='mt-5 text-gray-500 text-sm hover:cursor-pointer'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam asperiores est harum illum impedit tempora aspernatur hic ab. Maiores consequatur sequi, ad quod nihil voluptatem, nobis reiciendis labore minima, eligendi soluta porro! Nobis vitae illo eius placeat consequatur nostrum itaque commodi doloremque aut totam vel magnam, quos nemo explicabo ut sint et iste possimus? Nesciunt numquam amet possimus nobis autem quisquam soluta beatae, ab voluptate est! Ratione ad nam qui nihil? Nostrum omnis sapiente tempora? Deserunt eaque ratione autem dignissimos quam, repudiandae sit animi omnis rem consectetur nemo pariatur. Consequuntur dolorum molestias temporibus vitae quod adipisci animi officia perferendis.
                    </p>
                    <div className='flex justify-center mt-5'>
                        <Link to="/jobApplication" className="flex justify-center w-48 bg-black text-white px-2 py-2 rounded-md hover:cursor-pointer">
                            Apply now
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default JobDetails;