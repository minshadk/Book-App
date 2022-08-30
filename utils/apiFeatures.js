class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excluededFields = ["page", "sort", "limit", "fields"];
    excluededFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join("");
      this.query = this.query.sort(sortBy);
      //  sort (price ratingAverage)
    } else {
      // - is used for decsending order
      this.query = this.query.sort({ timestamp: -1 });
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      // - remove the __v from the result
      this.query = this.query.select("-__v");
    }

    return this;
  }

  paginate() {
    // Multiplying by number to string to integer
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    // current page - 1 * limit
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    // if (this.queryString.page) {
    // const totalCount = this.query.countDocuments();
    //   if (skip >= totalCount) console.log("this page is not exist");
    // }

    // console.log(totalCount);

    return this;
  }
}

module.exports = ApiFeatures;
