import React, { useEffect, useState } from "react";
import { getVoters } from "../../VoteAPI";

const RegisteredVoters = () => {
  const [voters, setVoters] = useState([]);

  const getVotersAPI = async () => {
    let res = await getVoters();
    setVoters(res?.data || []);
  };
  useEffect(() => {
    getVotersAPI();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-5">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-5">
          <input type="text" placeholder="search" className="p-2 bg-gray-800 text-white rounded focus:outline-none" />
          <div className="text-right">
            <p className="text-xl">Registered Voters:</p>
            <p>
              Total: <span className="text-green-400">{voters?.length || 0}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="bg-gray-800 p-3 rounded">
            Province <br />
            <span className="font-bold">Punjab</span>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            District <br />
            <span className="font-bold">Qasur</span>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            Division <br />
            <span className="font-bold">Chunian</span>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            Tehseel <br />
            <span className="font-bold">GidPur</span>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            Council <br />
            <span className="font-bold">UC-71</span>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            Polling Station <br />
            <span className="font-bold">-----</span>
          </div>
        </div>

        <div className="bg-transparent p-5 rounded">
          <table className="w-full text-left  border-separate border-spacing-y-2">
            <thead className="">
              <tr>
                <th className="p-3">Sr No.</th>
                <th className="p-3">Name</th>
                <th className="p-3">Father’s Name</th>
                <th className="p-3">Poling Station</th>
                <th className="p-3">CNIC No.</th>
                <th className="p-3">Address</th>
              </tr>
            </thead>
            <tbody>
              {voters.map((voter) => (
                <tr key={voter.id} className="bg-gray-800">
                  <td className="p-3">{voter.id}</td>
                  <td className="p-3">{voter?.name}</td>
                  <td className="p-3">{voter?.father_name}</td>
                  <td className="p-3">{voter?.polling_station?.name}</td>
                  <td className="p-3">{voter?.cnic}</td>
                  <td className="p-3">{voter?.address}</td>
                </tr>
              ))}
              {/* <tr className="bg-gray-800">
                <td className="p-3">02</td>
                <td className="p-3">01</td>
                <td className="p-3">Javed Iqbal</td>
                <td className="p-3">M. Haneef</td>
                <td className="p-3">26</td>
                <td className="p-3">35301-959717</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-3">03</td>
                <td className="p-3">01</td>
                <td className="p-3">Azhar Iqbal</td>
                <td className="p-3">M. Haneef</td>
                <td className="p-3">22</td>
                <td className="p-3">35301-959527</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-3">04</td>
                <td className="p-3">02</td>
                <td className="p-3">Sarfarz Ahmad</td>
                <td className="p-3">M. Haneef</td>
                <td className="p-3">38</td>
                <td className="p-3">35101-055167</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-3">05</td>
                <td className="p-3">03</td>
                <td className="p-3">Zulfiqar</td>
                <td className="p-3">M. Haneef</td>
                <td className="p-3">39</td>
                <td className="p-3">35101-104387</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-3">06</td>
                <td className="p-3">04</td>
                <td className="p-3">Jafar Ali</td>
                <td className="p-3">Tajdeen</td>
                <td className="p-3">69</td>
                <td className="p-3">45101-478787</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-3">07</td>
                <td className="p-3">04</td>
                <td className="p-3">Basharat Ali</td>
                <td className="p-3">Jafar Ali</td>
                <td className="p-3">21</td>
                <td className="p-3">35101-634787</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-3">08</td>
                <td className="p-3">05</td>
                <td className="p-3">Abdul Ghafoor</td>
                <td className="p-3">Jafar Ali</td>
                <td className="p-3">39</td>
                <td className="p-3">35101-670525</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisteredVoters;
