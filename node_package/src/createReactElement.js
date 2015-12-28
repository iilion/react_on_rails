import React from 'react';
import ReactOnRails from './ReactOnRails';

/**
 * Logic to either call the generatorFunction or call React.createElement to get the
 * React.Component
 * @param options
 * @param options.componentName
 * @param options.props
 * @param options.domId
 * @param options.trace
 * @param options.generatorFunction Deprecated, remove for v3.0
 * @param options.location
 * @returns {Element}
 */
export default function createReactElement({
  componentName,
  props,
  domId,
  trace,
  generatorFunction: domGeneratorFunction,
  location,
  }) {
  if (trace) {
    console.log('RENDERED ' + componentName + ' to dom node with id: ' + domId);
  }

  const componentObj = ReactOnRails.getComponent(componentName);

  // CONSIDER NOT RELEASING THE OPTION version
  const { component, generatorFunction } = componentObj;

  if (generatorFunction || domGeneratorFunction) {
    return component(props, location);
  }

  return React.createElement(component, props);
}
