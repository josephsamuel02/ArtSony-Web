import { useEffect, useState } from "react";
import Switch from "react-switch";
const Notification = () => {
  const userData = true;

  const [disableComments, setDisableComments] = useState<boolean>(userData ? userData : false);

  useEffect(() => setDisableComments(userData), [userData]);

  return (
    <div className="w-full h-full p-3  rounded-md">
      <h2 className="text-xl p-3   border-b border-[#ff6f4349] text-customOrange font-Raleway">
        Notification
      </h2>

      <div className="m-auto w-full h-full pt-[270px] flex flex-col justify-center overflow-y-scroll">
        <div className="w-full h-auto mb-16 flex flex-col justify-center ">
          <div className="w-full h-auto flex flex-col my-3">
            <h2 className="text-base p-3 mt-4 text-customOrange font-Raleway">
              Email me when Artsony *
            </h2>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Use my artwork on Artsony.com
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Use my artwork for a social media post
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
          </div>
          <div className="w-full h-auto flex flex-col my-3">
            <h2 className="text-base p-3 mt-4 text-customOrange font-Raleway">
              Email me when Others *
            </h2>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">Like my art</h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Comment on my art
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Start following me
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">Message me</h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Respond to my messages
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
          </div>
          <div className="w-full h-auto flex flex-col my-3">
            <h2 className="text-base p-3 mt-4 text-customOrange font-Raleway">
              Email me when users i follow
            </h2>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Post a new artwork
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Like artworks in my moodboard
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Post a new artwork for sale
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">Message me</h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Respond to my messages
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
          </div>
          <div className="w-full h-auto flex flex-col my-3">
            <h2 className="text-base p-3 mt-4 text-customOrange font-Raleway">
              Email me when my Artwork *
            </h2>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
          </div>
          <div className="w-full h-auto flex flex-col my-3">
            <h2 className="text-base p-3 mt-4 text-customOrange font-Raleway">
              Email from Artsony shop when *
            </h2>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
          </div>
          <div className="w-full h-auto flex flex-col my-3">
            <h2 className="text-base p-3 mt-4 text-customOrange font-Raleway">
              Email from Orders *
            </h2>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
          </div>
          <div className="w-full h-auto flex flex-col my-3">
            <h2 className="text-base p-3 mt-4 text-customOrange font-Raleway">
              Email me when I *
            </h2>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
          </div>
          <div className="w-full h-auto flex flex-col my-3">
            <h2 className="text-base p-3 mt-4 text-customOrange font-Raleway">
              On-Site Sound Notification *
            </h2>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
            <div className="mt-2 w-10/12 h-auto flex flex-row">
              <h2 className="text-sm p-3 py-1 text-gray-800 font-Raleway">
                Nominates my artwork for art of the week
              </h2>

              <Switch
                // defaultChecked={userData.disable_comments ? userData.disable_comments : false}
                checked={disableComments}
                onColor={"#f25b38"}
                offColor={"#8AC5C7"}
                height={24}
                className="ml-auto py-0"
                onChange={() => {
                  setDisableComments(disableComments ? false : true);
                  // setArtDetail((prev: any) => ({ ...prev, disable_comments: disableComments }));
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <input
        type="button"
        name="Save"
        value="Save Changes"
        className=" flex  py-2 my-3  mr-10 ml-auto px-4 text-sm text-white font-Poppins bg-[#02272F]  hover:bg-[#013d4b]  rounded-md cursor-pointer"
      />
    </div>
  );
};

export default Notification;
