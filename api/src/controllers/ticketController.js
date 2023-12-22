const TicketModel = require("../models/ticketModel");

const getTickets = async (req, res) => {
  try {
    let { page, limit, ...rest } = req.query;
    page = Number(page) || 1;
    limit = Number(limit) || 10;
    let skip = (page - 1) * limit;
    let users = await TicketModel.find(rest).skip(skip).limit(limit);
    res.json({ data: users, dataLength: users.length, page });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await TicketModel.findById(id);
    res.send(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const addTicket = async (req, res) => {
  try {
    let ticket = await TicketModel.create(req.body);
    res.status(201).send(ticket);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    let ticket = await TicketModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(ticket);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    let ticket = await TicketModel.findByIdAndDelete(id);
    res.send(ticket);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getTickets,
  getTicketById,
  addTicket,
  updateTicket,
  deleteTicket,
};
