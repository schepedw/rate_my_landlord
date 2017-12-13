// This is just because I like rspec's concept of 'context'
// It is just a logical construct, it behaves the same as `describe`
// - Dan

global.context = (description, fn) => describe(description, fn);
