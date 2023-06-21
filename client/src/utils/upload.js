import axios from "axios";

const upload = async (file) => {
  const data = new FormData(); // creats new object that helps in constructing & sending form data along with HTTP request
  data.append("file", file); // adds the file to the form data with the key "file"
  data.append("upload_preset", "microworkz");

  try {
    const res = await axios.post(
      // HTTP post request is made to cloudinary API
      "https://api.cloudinary.com/v1_1/dsfmfnieq/upload",
      data // data is sent with file and upload_preset
    );
    const { url } = res.data; // if post was successful - url of uploaded file can be extracted
    return url;
  } catch (err) {
    console.log(err);
  }
};
export default upload;
