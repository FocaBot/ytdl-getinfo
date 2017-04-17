const { getInfo } = require('../index')
var chai = require('chai')
chai.use(require('chai-events'))
chai.use(require('chai-as-promised'))
chai.should()

describe('ytdl-getinfo', function () {
  it('should fail when called with no query', function () {
    return getInfo().should.be.rejected
  })
  
  it('should resolve with basic info for a single video', function () {
    this.timeout(30000)
    return getInfo('v7BddpYYNGk').should.eventually.have.property('items').with.lengthOf(1)
  })

  it('should resolve with "partial" set to false for a single video', function () {
    this.timeout(30000)
    return getInfo('v7BddpYYNGk').should.eventually.have.property('partial', false)
  })

  it('should resolve with "partial" set to true for playlists', function () {
    this.timeout(30000)
    return getInfo('PLwiyx1dc3P2JR9N8gQaQN_BCvlSlap7re').then(p => { p.cancel(); return p })
    .should.eventually.have.property('partial', true)
  })
  
  it('should wait for the entire playlist when "wait" is true', function () {
    this.timeout(60000)
    return getInfo('PLwiyx1dc3P2JR9N8gQaQN_BCvlSlap7re', [], true)
    .should.eventually.have.property('items').with.lengthOf(3)
  })

  it('should be able to handle large amounts of data', function () {
    this.timeout(30000)
    return getInfo('JwKHxzfmAOY').should.eventually.have.property('items').with.lengthOf(1)
  })

  it('should throw errors produced by youtube-dl', function () {
    this.timeout(30000)
    return getInfo('AnYcMiksJ-A').should.be.rejected // Private Video
  })

  it('should emit the "done" event when all the playlist data is available', function () {
    this.timeout(60000)
    return getInfo('PLwiyx1dc3P2JR9N8gQaQN_BCvlSlap7re')
    .should.eventually.emit('done')
  })

})
