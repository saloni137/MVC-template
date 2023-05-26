/*
 * @description : create a document
 * @param  {obj} collection : mongoose instance of a collection
 * @param  {obj} data : {}
 * @return Promise
 */
const create = (collection, data) => new Promise((resolve, reject) => {
    collection.create(data, (err, result) => {
        if (err) reject(err);
        else resolve(result);
    });
});

/*
 * @description : update any existing document
 * @param  {obj} collection : mongoose instance of a collection
 * @param {ObjectId} id : document's _id
 * @param {obj} data : {}
 * @return Promise
 */
const updateOne = (collection, id, data) => new Promise((resolve, reject) => {
    collection.updateOne({ _id: id }, data, {
        runValidators: true,
        context: 'query',
    }, (err, result) => {
        if (err) reject(err);
        else resolve(result);
    });
});

/*
 * @description : delete any existing document
 * @param  {obj} collection : mongoose instance of a collection
 * @param  {ObjectId} id : document's _id
 * @return Promise
 */
const deleteOne = (collection, id) => new Promise((resolve, reject) => {
    collection.deleteOne({ _id: id }, (err, data) => {
        if (err) reject(err);
        else resolve(data);
    });
});

/*
 * @description : find single document
 * @param  {obj} collection : mongoose instance of a collection
 * @param  {ObjectId} id : document's _id
 * @param  {Array} select : [] *optional
 * @return Promise
 */
const findById = (collection, id, select = []) => new Promise((resolve, reject) => {
    collection.findOne({ _id: id }, select, (err, data) => {
        if (err) reject(err);
        else resolve(data);
    });
});

/*
 * @description : count total number of records in a collection
 * @param  {obj} collection : mongoose instance of a collection
 * @param {obj} query  : {}
 * @return Promise
 */
const count = (collection, query) => new Promise((resolve, reject) => {
    collection.countDocuments(query,(err, result) => {
        if (err) reject(err);
        else resolve(data);
    });
});

/*
 * @description : find all the documents
 * @param  {obj} collection : mongoose instance of a collection
 * @param {obj} filter    : {}
 * @param {obj} options  : {}
 * @return Promise
 */
const findAll = (collection, filter = {}, options = {}) => new Promise((resolve, reject) => {
    let query = collection.find(filter);
    if (options.select) {
        query = query.select(options.select);
    }
    if (options.populate) {
        query = query.populate(options.populate);
    }
    if (options.lean) {
        query = query.lean();
    }
    query.exec((err, data) => {
        if (err) reject(err);
        else resolve(data);
    });
});

module.exports = {
    create,
    updateOne,
    deleteOne,
    findById,
    count,
    findAll
};
