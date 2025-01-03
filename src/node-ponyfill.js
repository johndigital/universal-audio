const nodeWebAudio = require('node-web-audio-api')

module.exports = exports = nodeWebAudio
exports.OfflineAudioCompletionEvent = nodeWebAudio.OfflineAudioCompletionEvent
exports.AudioProcessingEvent = nodeWebAudio.AudioProcessingEvent
exports.AudioRenderCapacityEvent = nodeWebAudio.AudioRenderCapacityEvent
exports.BaseAudioContext = nodeWebAudio.BaseAudioContext
exports.AudioContext = nodeWebAudio.AudioContext
exports.OfflineAudioContext = nodeWebAudio.OfflineAudioContext
exports.ScriptProcessorNode = nodeWebAudio.ScriptProcessorNode
exports.AudioWorkletNode = nodeWebAudio.AudioWorkletNode
exports.AnalyserNode = nodeWebAudio.AnalyserNode
exports.AudioBufferSourceNode = nodeWebAudio.AudioBufferSourceNode
exports.BiquadFilterNode = nodeWebAudio.BiquadFilterNode
exports.ChannelMergerNode = nodeWebAudio.ChannelMergerNode
exports.ChannelSplitterNode = nodeWebAudio.ChannelSplitterNode
exports.ConstantSourceNode = nodeWebAudio.ConstantSourceNode
exports.ConvolverNode = nodeWebAudio.ConvolverNode
exports.DelayNode = nodeWebAudio.DelayNode
exports.DynamicsCompressorNode = nodeWebAudio.DynamicsCompressorNode
exports.GainNode = nodeWebAudio.GainNode
exports.IIRFilterNode = nodeWebAudio.IIRFilterNode
exports.MediaStreamAudioSourceNode = nodeWebAudio.MediaStreamAudioSourceNode
exports.OscillatorNode = nodeWebAudio.OscillatorNode
exports.PannerNode = nodeWebAudio.PannerNode
exports.StereoPannerNode = nodeWebAudio.StereoPannerNode
exports.WaveShaperNode = nodeWebAudio.WaveShaperNode
exports.AudioNode = nodeWebAudio.AudioNode
exports.AudioScheduledSourceNode = nodeWebAudio.AudioScheduledSourceNode
exports.AudioParam = nodeWebAudio.AudioParam
exports.AudioDestinationNode = nodeWebAudio.AudioDestinationNode
exports.AudioListener = nodeWebAudio.AudioListener
exports.AudioWorklet = nodeWebAudio.AudioWorklet
exports.AudioParamMap = nodeWebAudio.AudioParamMap
exports.AudioRenderCapacity = nodeWebAudio.AudioRenderCapacity
exports.PeriodicWave = nodeWebAudio.PeriodicWave
exports.AudioBuffer = nodeWebAudio.AudioBuffer

// Needed for TypeScript consumers without esModuleInterop.
exports.default = nodeWebAudio
