import PostModel from "../models/Post.js"
export const getAll = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Невдалося знайти товари",
    });
  }
}

 export const getOne = async (req,res) => {
    try {
     const  postId = req.params.id
     const post = await PostModel.findOne({_id: postId});
     res.json(post);
    } 
    catch (error) {
     console.log(error)
     res.status(500).json({
         message:"Невдалося знайти товар",
     });
    }
 }
 
 export const remove = async (req, res) => {
    try {
      const postId = req.params.id;
      const result = await PostModel.findOneAndDelete({ _id: postId });
      if (!result) {
        return res.status(404).json({
          message: "Товар не знайдено",
        });
      }
      res.json({
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Невдалося видалити товар",
      });
    }
  };


  export const update = async (req, res) => {
    try {
      const postId = req.params.id;
      await PostModel.updateOne(
        { _id: postId },
        {
          firstLoan : req.body.firstLoan,
          annualRate : req.body.annualRate,
          forTheTerm : req.body.forTheTerm,
          realRateMin : req.body.realRateMin,
          realRateMax : req.body.realRateMax,
          category: req.body.category,
          site : req.body.site,
          imgmain: req.body.imgmain,
          // imagesSlider: req.body.imagesSlider 
          // imgsecond:req.body.imgsecond,
          // imgthird:req.body.imgthird
        }
        );
      res.json({
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Невдалося обновити дані товару",
      });
    }
  };


export const create = async (req,res) => {
   try {
    const doc = new PostModel ({
      firstLoan : req.body.firstLoan,
      annualRate : req.body.annualRate,
      forTheTerm : req.body.forTheTerm,
      realRateMin : req.body.realRateMin,
      realRateMax : req.body.realRateMax,
      category : req.body.category,
      site : req.body.site,
      imgmain : req.body.imgmain,
        // imgsecond:req.body.imgsecond,
        // imgthird:req.body.imgthird,
        // imagesSlider: req.body.imagesSlider 
      //  user: req._userId*/
    })
    const post = await doc.save()
    res.json(post);
   } 
   catch (error) {
    console.log(error)
    res.status(500).json({
        message:"Невдалося створити товар",
    });
   }
}